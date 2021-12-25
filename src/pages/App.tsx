import Head from 'next/head'

import styles from '../styles/Home.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Impetus</title>
      </Head>

      <main className={styles.main}>
        <section className="left">
          <div className="search_container">
            <label htmlFor="search_input">
              <img
                className="search_icon"
                id="search_icon"
                src="/images/search_icon.png"
                alt="Search the internet"
              />
            </label>

            <form className="search_form" id="search_form">
              <input
                className="search_input"
                id="search_input"
                placeholder="Search the internet"
                type="text"
                required
              />
            </form>
          </div>
        </section>

        <section className="center">
          <div className="center_anchor"></div>

          <div className="clock_greeting">
            <h2 className="clock" id="clock">
              00:00:00
            </h2>

            <form className="hidden" id="login_form">
              <input
                className="floating"
                placeholder="What's your name?"
                type="text"
                required
                maxLength={15}
              />
            </form>

            <h1 className="hidden" id="greeting"></h1>
          </div>

          <div className="todo_quote">
            <div className="todo_container" id="todo_container">
              <form className="todo" id="todo_form">
                <input
                  className="floating"
                  type="text"
                  placeholder="Type a task here"
                  required
                />
              </form>

              <ul className="todo_list" id="todo_list"></ul>
            </div>

            <div className="quote" id="quote">
              <div id="quote_content"></div>
            </div>
          </div>
        </section>

        <section className="right">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="weather_container"
            id="weather_container"
          >
            <img src="" alt="" id="weather_icon" />

            <div className="weather_details">
              <span id="weather_temp"></span>
              <span id="weather_city"></span>
            </div>
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
