import { weeksInYear, cellSize, darkGrey } from "../constants";

type WeekRowProps = {
  label?: number;
  fillIndex: number;
};

export default function WeekRow({ label, fillIndex }: WeekRowProps) {
  return (
    <div className="row">
      {weeksInYear.map((_, index) => {
        let classes = "week";

        if (index < fillIndex) {
          classes += " filled";
        }

        return <div className={classes} key={index} />;
      })}
      <label className="label">{label}</label>

      <style jsx>{`
        .week {
          margin: 1px;
          height: ${cellSize}px;
          width: ${cellSize}px;
          border: 1px solid ${darkGrey};
        }

        .week.filled {
          background-color: ${darkGrey};
        }

        .row {
          display: flex;
          align-items: center;
          position: relative;
        }

        .week:nth-child(26) {
          margin-right: ${cellSize * 2}px;
        }

        .label {
          position: absolute;
          right: -32px;
          text-align: left;
          width: 24px;
          font-size: 0.6em;
          color: ${darkGrey};
        }
      `}</style>
    </div>
  );
}
