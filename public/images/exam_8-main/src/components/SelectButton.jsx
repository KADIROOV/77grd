import { useState } from "react";

function SelectButton({ options, title, selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const handleClear = () => setSelected([]);

  return (
    <div className="select__btn">
      <button
        className="select__btn-button"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        <img src="./images/icon-chevron-down.svg" alt="" />
      </button>
      {open && (
        <div className="select__btn__item-wrapper">
          {options.map((opt) => (
            <div className="select-btn__item" key={opt.value}>
              <input
                type="checkbox"
                name={opt.value}
                value={opt.value}
                checked={selected.includes(opt.value)}
                onChange={() =>
                  setSelected((prev) => {
                    if (prev.includes(opt.value)) {
                      return prev.filter((v) => v !== opt.value);
                    }
                    return [...prev, opt.value];
                  })
                }
              />
              {opt.label}
            </div>
          ))}
          <button
            className="select__btn-clear"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default SelectButton;
