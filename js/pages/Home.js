export default {
    name: 'Home',
    template: `
        <div class="home-container">
            <section class="hero-section">
                <h1 class="hero-title">The nchgng Demon List</h1>
                <div class="hero-actions">
                    <router-link to="/list" class="home-btn home-btn-primary">Explore List</router-link>
                    <router-link to="/leaderboard" class="home-btn home-btn-secondary">View Leaderboards</router-link>
                </div>
            </section>

            <section class="features-grid">
                <div class="feature-item">
                    <h3>Demon Rankings</h3>
                    <p style="color: #888d96; font-size: 0.9rem; margin: 0; line-height: 1.4;">levels organized by difficulty based on the AREDL and GDDL.</p>
                </div>
                <div class="feature-item">
                    <h3>Community Leaderboard</h3>
                    <p style="color: #888d96; font-size: 0.9rem; margin: 0; line-height: 1.4;">record submissions and nch placements.</p>
                </div>
                <div class="feature-item">
                    <h3>Upcoming Progress</h3>
                    <p style="color: #888d96; font-size: 0.9rem; margin: 0; line-height: 1.4;">upcoming top levels.</p>
                </div>
            </section>
        </div>
    `
};
