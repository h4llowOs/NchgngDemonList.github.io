export default {
    template: `
        <main class="page-list">
            <!-- Left Sidebar Navigation -->
            <div class="list-nav">
                <button 
                    v-for="(item, index) in upcoming" 
                    :key="index"
                    class="nav-item" 
                    :class="{ 'active-nav-item': selectedIndex === index }"
                    @click="selectedIndex = index"
                >
                    <span class="rank">#{{ item.rank }}</span>
                    <span class="name">{{ item.level }}</span>
                </button>
            </div>

            <!-- Right Content Display Panel -->
            <div class="list-content" v-if="currentItem">
                <div class="level-meta">
                    <h1>{{ currentItem.level }}</h1>
                    <table class="meta-table">
                        <tr>
                            <td><strong>CREATOR</strong></td>
                            <td>{{ currentItem.creator || 'Unknown' }}</td>
                        </tr>
                        <tr>
                            <td><strong>VERIFIER</strong></td>
                            <td>{{ currentItem.player }}</td>
                        </tr>
                    </table>
                </div>

                <!-- Technical Stats Grid -->
                <div class="stats-grid">
                    <div>
                        <h3>POINTS WHEN COMPLETED</h3>
                        <p>{{ currentItem.points || '0' }}</p>
                    </div>
                    <div>
                        <h3>ID</h3>
                        <p>{{ currentItem.placement || 'N/A' }}</p>
                    </div>
                    <div>
                        <h3>PASSWORD</h3>
                        <p>Free to Copy</p>
                    </div>
                </div>

                <!-- Records Display Area (Upcoming Top 1s) -->
                <div class="records-section">
                    <h2>Records</h2>
                    <p class="qualification-text">100% or better to qualify</p>
                    
                    <div class="records-list">
                        <div class="record-card">
                            <span class="player-name"><strong>{{ currentItem.player }}</strong></span>
                            <span class="progress-badge">{{ currentItem.progress }}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Fallback if JSON data is empty -->
            <div class="list-content" v-else-if="!loading && upcoming.length === 0">
                <p style="padding: 2rem; text-align: center;">No upcoming levels listed.</p>
            </div>
        </main>
    `,
    data() {
        return {
            upcoming: [],
            selectedIndex: 0,
            loading: true
        };
    },
    computed: {
        currentItem() {
            return this.upcoming[this.selectedIndex] || null;
        }
    },
    async mounted() {
        try {
            const response = await fetch('./data/upcoming.json');[cite: 1]
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();[cite: 1]
            
            if (Array.isArray(data)) {
                // Sort items numerically by rank sequence so it matches the list order
                this.upcoming = data.sort((a, b) => (a.rank || 0) - (b.rank || 0));
            }
        } catch (error) {
            console.error("Error loading upcoming list data:", error);
        } finally {
            // Safety trigger: Stops loading state no matter what, preventing an infinite spinner/freeze
            this.loading = false;
        }
    }
};
