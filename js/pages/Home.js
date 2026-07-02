export default {
    name: 'Home',
    template: `
        <div class="home-container">
            <section class="hero-section">
                <h1 class="hero-title">The nchgng Demon List</h1>
                <div class="hero-actions">
                    <router-link to="/list" class="home-btn">Explore List</router-link>
                    <router-link to="/towerlist" class="home-btn">Explore Towerlist</router-link>
                    <router-link to="/leaderboard" class="home-btn">View Leaderboards</router-link>
                </div>
            </section>

            <section class="features-grid">
                <div class="feature-item">
                    <h3>Demon Rankings</h3>
                    <p style="color: #888d96; font-size: 0.9rem; margin: 0; line-height: 1.4;">Levels categorized by overall difficulty.</p>
                </div>
                <div class="feature-item">
                    <h3>Community Leaderboard</h3>
                    <p style="color: #888d96; font-size: 0.9rem; margin: 0; line-height: 1.4;">Record submission and player placements.</p>
                </div>
                <div class="feature-item">
                    <h3>Upcoming Progress</h3>
                    <p style="color: #888d96; font-size: 0.9rem; margin: 0; line-height: 1.4;">Tracking upcoming inclusions and changes.</p>
                </div>
            </section>
        </div>
    `
};
