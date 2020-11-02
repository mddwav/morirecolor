import { weeksInYear, darkGrey, mobileScreenWidth } from "../constants";

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
          height: 2px;
          width: 2px;
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

         {
          /* .week:nth-child(26) {
          margin-right: 6px;
        } */
        }

        .label {
          position: absolute;
          right: -8px;
          width: 1px;
          text-align: left;
          color: ${darkGrey};
        }

        @media screen and (max-width: ${mobileScreenWidth}) {
          .label {
            font-size: 8px;
          }
        }
      `}</style>
    </div>
  );
}
