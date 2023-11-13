
function Experience(){
    return(
        <div style={{ userSelect: 'none' }}>
  <div
    className="flex items-center justify-center p-4 py-28"
    style={{
      backgroundImage: 'url(https://drive.google.com/uc?export=download&id=1ko1ln-1_EKVJfI0-n7C1xCpzPb7bYP1P)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <p className="text-white text-4xl font-bold"> EXPERIENCES </p>
  </div>
  <div className="flex bg-gradient-to-r from-slate-500 to-slate-800">
    <div className="flex-1 p-4 text-lime-500 text-xl py-48">left</div>
    <div className="flex-1 p-4 text-xl py-48">right</div>
  </div>
</div>

    )
}
export default Experience;