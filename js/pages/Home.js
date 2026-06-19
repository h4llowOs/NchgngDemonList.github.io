export default {
    name: 'Home',
    template: `
        <div style="grid-column: 1 / -1; width: 100%; max-width: 1100px; margin: 4rem auto; padding: 0 2rem; box-sizing: border-box; font-family: 'Lexend Deca', sans-serif; display: flex; flex-direction: column; gap: 2rem;">
            <section style="text-align: center; padding: 5rem 2rem; background-color: #14181c; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05);">
                <h1 style="font-size: 3rem; font-weight: 700; color: #ffffff; margin-bottom: 1rem;">The <span style="color: #3b82f6;">nchgng</span> Demon List</h1>
                <p style="font-size: 1.15rem; color: #9ca3af; max-width: 580px; margin: 0 auto 2.5rem auto; line-height: 1.6;">
                    Tracking and ranking the absolute hardest custom challenges conquered by our community.
                </p>
                <div style="display: flex; justify-content: center; gap: 1rem;">
                    <router-link to="/list" style="padding: 0.8rem 1.8rem; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 0.95rem; background-color: #3b82f6; color: #ffffff;">Explore the List</router-link>
                    <router-link to="/leaderboard" style="padding: 0.8rem 1.8rem; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 0.95rem; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); color: #ffffff;">View Leaderboards</router-link>
                </div>
            </section>

            <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
                <div style="padding: 2rem; background-color: #14181c; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05);">
                    <h3 style="margin-bottom: 0.75rem; color: #ffffff; font-size: 1.25rem; font-weight: 700;">Demon Rankings</h3>
                    <p style="color: #9ca3af; line-height: 1.5; font-size: 0.95rem;">Meticulously ordered by difficulty. Only the most punishing challenges survive here.</p>
                </div>
                <div style="padding: 2rem; background-color: #14181c; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05);">
                    <h3 style="margin-bottom: 0.75rem; color: #ffffff; font-size: 1.25rem; font-weight: 700;">Community Driven</h3>
                    <p style="color: #9ca3af; line-height: 1.5; font-size: 0.95rem;">Submit your records via Discord to assert your placement on our official leaderboard.</p>
                </div>
                <div style="padding: 2rem; background-color: #14181c; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05);">
                    <h3 style="margin-bottom: 0.75rem; color: #ffffff; font-size: 1.25rem; font-weight: 700;">Upcoming Progress</h3>
                    <p style="color: #9ca3af; line-height: 1.5; font-size: 0.95rem;">Keep track of unrated gems and upcoming projects currently being verified.</p>
                </div>
            </section>
        </div>
    `
};
