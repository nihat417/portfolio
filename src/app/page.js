import Typer from "./components/typeWriter/typer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <section className="flex flex-col justify-around md:flex-row md:mt-[100px] items-center md:items-start">
        <div>
          <h1 className="text-6xl md:text-7xl whitetext">Hi There!</h1>
          <p className="text-2xl md:text-4xl whitetext">I'M <span className="blacktext">Nihat.</span></p>
          <h1><Typer/></h1>
        </div>
        <div></div>
        <div>
          <h1 className="text-6xl md:text-7xl whitetext">Hi There!</h1>
          <p className="text-2xl md:text-4xl">I'M Nihat.</p>
          <h1><Typer/></h1>
        </div>
      </section>

      <section className="flex flex-col justify-center md:mt-[100px]">
        <div className="md:w-[650px]">
          <h1 className="text-6xl md:text-7xl whitetext">About<span className="blacktext"> Me</span></h1>
          <p className="text-lg md:text-xl mb-4 whitetext">I've ventured into the world of coding with hands-on experience in languages like C++, Python, C#, JavaScript, and Dart. While my journey has touched various languages, I've honed my skills specializing in C#. My expertise extends to frameworks and technologies such as ASP.NET, Node.js, MS SQL, React, Next.js, React Native, and Flutter.</p>
          <p className="text-lg md:text-xl mb-4 whitetext">My passion lies in crafting robust APIs and delving into the realm of mobile development, where I strive to innovate and create seamless user experiences.</p>
        </div>
        <div>

        </div>
      </section>
    </main>


  );
}
