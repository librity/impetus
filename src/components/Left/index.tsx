export const Left = () => {
  return (
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
  )
}

export default Left
