export default function Title({ setState }: { setState: any }) {
  return (
    <>
      <div>Pasldkfjl;askfj</div>
      <button
        onClick={() => {
          setState(Math.random());
        }}
      >
        이거눌러라
      </button>
    </>
  )
}