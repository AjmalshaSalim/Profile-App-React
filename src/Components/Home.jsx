function Home() {
    return (
        <div className="flex flex-col-reverse text-white md:flex-row bg-gradient-to-r from-sky-900 via-sky-900 to-emerald-800 py-36 px-6 md:px-28">
  <div className="flex-1 p-4 text-emerald" style={{ userSelect: 'none' }}>
    <p className="font-sans text-2xl font-light hover:text-emerald-300">Hello, I am</p>
    <br />
    <p className="font-sans font-semibold text-4xl  text-emerald-300">AJMALSHA SALIM</p>
    <br />
    <p className="text-justify font-light text-lg hover:text-emerald-300" style={{ userSelect: 'none' }}>
      "An Experienced MERN Stack Developer with over 1+ years of dedicated
      involvement in creating and executing web applications. My passion lies in
      building scalable distributed systems, and my journey has been marked by a
      rapid acquisition of deep knowledge in JavaScript. With a strong penchant
      for problem-solving, I am dedicated to crafting code that is both readable
      and maintainable. My curiosity drives me to continuously explore and
      master new technologies."
    </p>
  </div>
  <div className="flex items-center justify-center p-4" style={{ userSelect: 'none' }}>
    <img
      src="https://drive.google.com/uc?id=1a-8Rri8qaefJUntpm4Vf97vDUZm_3fa5"
      className="h-auto max-w-sm rounded-full relative z-[777]"
      alt=""
    />
  </div>
  <ul class="circles" style={{ marginTop: '60px'}}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
</div>
    )
}
export default Home;