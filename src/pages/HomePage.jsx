const HomePage = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <section className="bg-navyBG rounded-3xl p-6 mb-4">
        <h1 className="font-bold mb-4 tracking-tight text-5xl text-center">
          Welcome to <br /> Yefry UI
        </h1>
        <p className="text-softDarkText font-bold max-w-lg mx-auto">
          Yefry UI offers a sleek collection of React components, expertly
          crafted and styled with Tailwind CSS. Designed by{" "}
          <a className="underline italic" href="">
            Yefry Sanchez
          </a>
          , our components are ready to integrate into your projects, saving you
          time and enhancing your UI.
        </p>
      </section>

      <form className="bg-navyBG rounded-3xl p-6 ">
        <h2 className="font-bold mb-4 tracking-tight text-xl text-center">
          Get notified when new components drops!
        </h2>
        <div className="flex flex-col mx-auto max-w-lg">
          <input placeholder="Email" className="max-w-lg bg-darkText/20 border mb-4  border-darkText rounded-3xl py-2 px-6" type="email" name="email" />
          <input className="max-w-lg bg-accent text-navyBG font-bold rounded-3xl py-2 px-6" type="submit" value="Submit" />
        </div>
      </form>
    </main>
  );
};

export default HomePage;
