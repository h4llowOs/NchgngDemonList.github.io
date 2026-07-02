export default {
    name: 'Home',
    template: `
        <div class="home-container">
            <section class="hero-section">
                <h1 class="hero-title">The nchgng Demon List</h1>
                <div class="hero-actions">
                    <router-link to="/list" class="home-btn home-btn-primary">Explore List</router-link>
                    <router-link to="/leaderboard" class="home-btn home-btn-secondary">Leaderboards</router-link>
                </div>
            </section>

            <section class="features-grid">
                <div class="feature-item">
                    <h3>Rankings</h3>
                </div>
                <div class="feature-item">
                    <h3>Community</h3>
                </div>
                <div class="feature-item">
                    <h3>Progress</h3>
                </div>
            </section>
        </div>
    `
};
