export default function Movie(props) {
  return (
    <div class="movie-poster">
      <img src={props.posterURL} alt="" />
    </div>
  );
}
