/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface DraggableMarqueeProps {
  children: ReactNode;
  speed?: number;
  paused?: boolean;
  reversed?: boolean;
  center?: boolean;
  paddingRight?: number;
  className?: string;
  onChange?: (element: HTMLElement, index: number) => void;
}

export default function DraggableMarquee({
  children,
  speed = 1,
  paused = false,
  reversed = false,
  center = true,
  paddingRight = 0,
  className = "",
  onChange,
}: DraggableMarqueeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<any>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;
    const boxes = gsap.utils.toArray(wrapper.children) as HTMLElement[];

    let activeElement: HTMLElement | null = null;

    const loop = horizontalLoop(boxes, {
      paused,
      reversed,
      draggable: true,
      center,
      speed,
      paddingRight,
      onChange: (element: HTMLElement, index: number) => {
        if (activeElement) {
          activeElement.classList.remove("active");
        }
        element.classList.add("active");
        activeElement = element;
        if (onChange) {
          onChange(element, index);
        }
      },
    });

    timelineRef.current = loop;

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [paused, reversed, center, speed, paddingRight, onChange]);

  return (
    <div
      ref={wrapperRef}
      className={`relative flex items-center overflow-hidden ${className}`}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * horizontalLoop - GSAP helper function for seamless looping animations
 * This creates a seamless horizontal loop of elements that can be dragged
 */
function horizontalLoop(
  items: HTMLElement[],
  config: Record<string, any>
) {
  let timeline: gsap.core.Timeline | any;
  config = config || {};

  gsap.context(() => {
    const onChange = config.onChange as (element: HTMLElement, index: number) => void;
    let lastIndex = 0;

    const tl: any = gsap.timeline({
      repeat: config.repeat === undefined ? -1 : config.repeat as number,
      onUpdate:
        onChange &&
        function () {
          const i = tl.closestIndex();
          if (lastIndex !== i) {
            lastIndex = i;
            onChange(items[i], i);
          }
        },
      paused: config.paused as boolean,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      },
    });

    const length = items.length;
    const startX = items[0].offsetLeft;
    const times: number[] = [];
    const widths: number[] = [];
    const spaceBefore: number[] = [];
    const xPercents: number[] = [];
    let curIndex = 0;
    let indexIsDirty = false;
    const center = config.center;
    const pixelsPerSecond = (config.speed || 1) * 100;
    const snap =
      config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1);
    let timeOffset = 0;
    const container =
      center === true
        ? items[0].parentNode
        : gsap.utils.toArray(center)[0] || items[0].parentNode;
    let totalWidth: number;

    const getTotalWidth = () => {
      const scaleX = gsap.getProperty(items[length - 1], "scaleX");
      const scaleValue = typeof scaleX === 'number' ? scaleX : 1;
      return (
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        spaceBefore[0] +
        items[length - 1].offsetWidth * scaleValue +
        (parseFloat(config.paddingRight as string) || 0)
      );
    };

    const populateWidths = () => {
      let b1 = (container as HTMLElement).getBoundingClientRect();
      let b2;
      items.forEach((el, i) => {
        widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px") as string) / widths[i]) *
            100 +
            (gsap.getProperty(el, "xPercent") as number)
        );
        b2 = el.getBoundingClientRect();
        spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
        b1 = b2;
      });
      gsap.set(items, {
        xPercent: (i) => xPercents[i],
      });
      totalWidth = getTotalWidth();
    };

    let timeWrap: (value: number) => number;

    const populateOffsets = () => {
      timeOffset = center
        ? (tl.duration() * (container as HTMLElement).offsetWidth) / 2 / totalWidth
        : 0;
      if (center) {
        times.forEach((t, i) => {
          times[i] = timeWrap(
            tl.labels["label" + i] +
              (tl.duration() * widths[i]) / 2 / totalWidth -
              timeOffset
          );
        });
      }
    };

    const getClosest = (values: number[], value: number, wrap: number) => {
      let i = values.length;
      let closest = 1e10;
      let index = 0;
      let d: number;
      while (i--) {
        d = Math.abs(values[i] - value);
        if (d > wrap / 2) {
          d = wrap - d;
        }
        if (d < closest) {
          closest = d;
          index = i;
        }
      }
      return index;
    };

    const populateTimeline = () => {
      let i, item, curX, distanceToStart, distanceToLoop;
      tl.clear();
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
        distanceToLoop =
          distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      timeWrap = gsap.utils.wrap(0, tl.duration());
    };

    const refresh = (deep?: boolean) => {
      const progress = tl.progress();
      tl.progress(0, true);
      populateWidths();
      if (deep) {
        populateTimeline();
      }
      populateOffsets();
      if (deep && tl.draggable) {
        tl.time(times[curIndex], true);
      } else {
        tl.progress(progress, true);
      }
    };

    const onResize = () => refresh(true);
    let proxy: HTMLDivElement;

    gsap.set(items, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", onResize);

    function toIndex(index: number, vars?: any) {
      vars = vars || {};
      if (Math.abs(index - curIndex) > length / 2) {
        index += index > curIndex ? -length : length;
      }
      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);
      return vars.duration === 0
        ? tl.time(timeWrap(time))
        : tl.tweenTo(time, vars);
    }

    tl.toIndex = (index: number, vars?: any) => toIndex(index, vars);
    tl.closestIndex = (setCurrent?: boolean) => {
      const index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);
    tl.next = (vars?: any) => toIndex(tl.current() + 1, vars);
    tl.previous = (vars?: any) => toIndex(tl.current() - 1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    // Start playing unless explicitly paused
    if (!config.paused) {
      tl.play();
    }

    if (config.draggable && typeof Draggable === "function") {
      proxy = document.createElement("div");
      const wrap = gsap.utils.wrap(0, 1);
      let ratio: number,
        startProgress: number,
        lastSnap: number,
        initChangeX: number;
      // eslint-disable-next-line prefer-const
      let draggableInstance: any;

      const align = () =>
        tl.progress(wrap(startProgress + (draggableInstance.startX - draggableInstance.x) * ratio));
      const syncIndex = () => tl.closestIndex(true);

      draggableInstance = Draggable.create(proxy, {
        trigger: items[0].parentNode as HTMLElement,
        type: "x",
        onPressInit() {
          const x = this.x;
          gsap.killTweensOf(tl);
          tl.pause();
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = startProgress / -ratio - x;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value: number) {
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX;
          }
          const time = -(value * ratio) * tl.duration();
          const wrappedTime = timeWrap(time);
          const snapTime = times[getClosest(times, wrappedTime, tl.duration())];
          let dif = snapTime - wrappedTime;
          if (Math.abs(dif) > tl.duration() / 2) {
            dif += dif < 0 ? tl.duration() : -tl.duration();
          }
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease() {
          syncIndex();
          if (draggableInstance.isThrowing) {
            indexIsDirty = true;
          }
          if (!config.paused) {
            tl.play();
          }
        },
        onThrowComplete: () => {
          syncIndex();
          // Always resume playing after drag completes
          if (!config.paused) {
            tl.play();
          }
        },
      })[0];
      tl.draggable = draggableInstance;
    }

    tl.closestIndex(true);
    lastIndex = curIndex;
    if (onChange) {
      onChange(items[curIndex], curIndex);
    }
    timeline = tl;

    return () => window.removeEventListener("resize", onResize);
  });

  return timeline;
}
