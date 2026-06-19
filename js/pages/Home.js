const Home = {
    template: `
        <div class="home-container">
            <section class="hero">
                <div class="hero__content">
                    <h1 class="hero__title">The <span class="accent">nchgng</span> Demon List</h1>
                    <p class="hero__subtitle">
                        Tracking and ranking the absolute hardest custom levels completed by the #nch community.
                    </p>
                    <div class="hero__buttons">
                        <router-link to="/list" class="btn-home btn-home--primary">Explore the List</router-link>
                        <router-link to="/leaderboard" class="btn-home btn-home--secondary">View Leaderboards</router-link>
                    </div>
                </div>
            </section>

            <section class="home-features">
                <div class="feature-card">
                    <h3>Demon Rankings</h3>
                    <p>Meticulously ordered by difficulty. Only the most punishing challenges survive here.</p>
                </div>
                <div class="feature-card">
                    <h3>Community Driven</h3>
                    <p>Submit your records via Discord to assert your placement on our official leaderboard.</p>
                </div>
                <div class="feature-card">
                    <h3>Upcoming Progress</h3>
                    <p>Keep track of unrated gems and upcoming projects currently being verified.</p>
                </div>
            </section>
        </div>
    `
};
