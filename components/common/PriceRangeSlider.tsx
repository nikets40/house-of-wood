import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;

const PriceRangeSlider: React.FC<{ min: number; max: number }> = ({
  min,
  max,
}) => {
  const [values, setValues] = useState([min, max]);
  return (
    <div>
      <h5 className="font-bold text-lg capitalize">Price Range</h5>
      <div className="mt-5 flex justify-center flex-wrap px-2">
        <Range
          values={values}
          step={STEP}
          min={min}
          max={max}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values,
                    colors: ["#ccc", "#fa8c16", "#ccc"],
                    min: min,
                    max: max,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              className="cursor-auto h-4 w-4 rounded-full flex justify-center items-center shadow outline-none"
              style={{
                ...props.style,
                backgroundColor: index == 1 ? "#fa8c16" : "black",
              }}
            ></div>
          )}
        />
      </div>

      <div className="flex justify-between text-sm font-light mt-4">
        <p>${values[0].toFixed(2)}</p>
        <p>${values[1].toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
