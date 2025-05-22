export default function LoginForm() {
    return (
        <form className="flex flex-col gap-2">
            
            <input id="email" name="email" placeholder="Email" className=""></input>
            <input id="password" name="password" type="password" placeholder="Password"></input>
            <button>Submit</button>
        </form>
    )

}