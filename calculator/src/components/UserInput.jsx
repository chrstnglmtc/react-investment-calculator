export default function UserInput() {
    return (
        <section id="user-input">
            <form className="input-group">
                <label>
                    INITIAL INVESTMENT 
                    <input type="number"></input>
                </label>
                <label>
                    ANNUAL INVESTMENT 
                    <input type="number"></input>
                </label>
                <label>
                    EXPECTED RETURN 
                    <input type="number"></input>
                </label>
                <label>
                    DURATION 
                    <input type="number" min="1" max="12"></input>
                </label>
            </form>

        </section>
    )
}