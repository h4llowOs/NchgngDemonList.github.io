import { fetchUpcoming } from "../content.js";
import Spinner from "../components/Spinner.js";

export default {
    components: { Spinner },

    template: `
        <main v-if="loading">
            <Spinner />
        </main>

        <main v-else class="page-upcoming">
            <div class="upcoming-container">
                <h1>Upcoming Levels</h1>

                <table class="upcoming-table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Level</th>
                            <th>Placement</th>
                            <th>Projected Rank</th>
                            <th>Progress</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="entry in upcoming">
                            <td>@{{ entry.player }}</td>
                            <td>{{ entry.level }}</td>

                            <td>
                                <span v-if="entry.placement">
                                    #{{ entry.placement }}
                                </span>
                                <span v-else>—</span>
                            </td>

                            <td>Top {{ entry.rank }}</td>
                            <td>{{ entry.progress }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    `,

    data: () => ({
        loading: true,
        upcoming: []
    }),

    async mounted() {
        this.upcoming = await fetchUpcoming();
        this.loading = false;
    }
};
