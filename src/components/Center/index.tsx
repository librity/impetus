import Clock from './Clock'

export const Center = () => {
  return (
    <section className="center">
      <div className="center_anchor"></div>

      <div className="clock_greeting">
        <Clock />

        <form className="hidden">
          <input
            className="floating"
            placeholder="What's your name?"
            type="text"
            required
            maxLength={15}
          />
        </form>

        <h1 className="greeting"></h1>
      </div>

      <div className="todo_quote">
        <div className="todo_container">
          <form className="todo">
            <input
              className="floating"
              type="text"
              placeholder="Type a task here"
              required
            />
          </form>

          <ul className="todo_list"></ul>
        </div>

        <div className="quote">
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Center
