import SessionList from "./Session-list"

export default function SessionBody(){
  return(
    <>
    <div class="main">
      <div class="movie-select">
        <span>Selecione o horário</span>
      </div>
      <div class="sessions">
        <SessionList />
      </div>
    </div>
    </>
  )
}