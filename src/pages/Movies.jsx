import Card from "../components/Card"

const Movies = () => {
  return (
    <>
        <h1 className="movies">学習した動画一覧</h1>
        <div className="movies__cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </>
  )
}

export default Movies