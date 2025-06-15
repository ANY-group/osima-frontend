'use client';

import { useEffect, useRef, useState } from "react";
import { getTrackBackground, Range } from "react-range";

export default function RangeSlider({
  value,
  range,
  onChange,
}: {
  value?: { min: number, max: number },
  range: { min: number, max: number },
  onChange: (value: { min: number, max: number }) => void,
}) {
  const [values, setValues] = useState([value?.min || range.min, value?.max || range.max]);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    setValues([value?.min || range.min, value?.max || range.max]);
  }, [value]);

  const handleChange = (values: Array<number>) => {
    setValues(values);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      onChange({ min: values[0], max: values[1] });
    }, 500);
  };

  const getMin = (): number => Math.min(values[0], range.min);
  const getMax = (): number => Math.max(values[1], range.max, getMin() + 100);

  return (
    <>
      <Range
        values={values}
        step={1}
        min={getMin()}
        max={getMax()}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "10px",
              display: "flex",
              width: "100%",
              padding: '0 5px',
            }}
          >
            <div
              ref={props.ref}
              className="rounded-full"
              style={{
                height: "3px",
                width: "100%",
                alignSelf: "center",
                background: getTrackBackground({
                  values,
                  colors: ["#eeb4c9", "#ee4683", "#eeb4c9"],
                  min: getMin(),
                  max: getMax(),
                  rtl: false,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            className="p-3"
            style={{
              ...props.style,
            }}
          >
            <div className="w-3 h-3 rounded-full bg-accent"></div>
          </div>
        )}
      />
      <output id="output" className="flex justify-between w-full py-2 text-xs">
        <span>
          {values[0].toLocaleString()} ₸
        </span>
        <span>
          {values[1].toLocaleString()} ₸
        </span>
      </output>
    </>
  );
}