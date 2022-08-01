export default function Session(props) {
  return (
    <>
      <div class="weekday">
        <span>
          {props.weekday} - {props.date}
        </span>
      </div>
      <div class="session">
        <div class="hour"><span>{props.showtimes}</span></div>
      </div>
      <div class="footer">
        <img src={props.posterURL} alt="" />
      </div>
    </>
  );
}
