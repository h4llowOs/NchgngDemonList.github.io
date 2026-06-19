export default {
    name: 'Home',
    template: `
        <div class="home-container">
            <section class="hero-section">
                <h1 class="hero-title">The <span class="accent-text">nchgng</span> Demon List</h1>
                <p class="hero-subtitle">
                    Tracking and ranking the absolute hardest custom challenges conquered by our community.
                </p>
                <div class="hero-actions">
                    <router-link to="/list" class="home-btn home-btn-primary">Explore the List</router-link>
                    <router-link to="/leaderboard" class="home-btn home-btn-secondary">View Leaderboards</router-link>
                </div>
            </section>

            <section class="features-grid">
                <div class="feature-item">
                    <h3>Demon Rankings</h3>
                    <p>Meticulously ordered by difficulty. Only the most punishing challenges survive here.</p>
                </div>
                <div class="feature-item">
                    <h3>Community Driven</h3>
                    <p>Submit your records via Discord to assert your placement on our official leaderboard.</p>
                </div>
                <div class="feature-item">
                    <h3>Upcoming Progress</h3>
                    <p>Keep track of unrated gems and upcoming projects currently being verified.</p>
                </div>
            </section>
        </div>
    `
};
