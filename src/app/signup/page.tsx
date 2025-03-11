import { signup } from './actions'

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Sign Up</h2>
                    <form className="space-y-4">
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="input input-bordered w-full"
                                minLength={6}
                            />
                        </div>
                        <div className="card-actions justify-end space-x-2 pt-2">
                            <button className="btn btn-primary" formAction={signup}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}