import Spinner from "../components/Spinner.js";
import { fetchUpcoming } from "../content.js";

export default {
    components: { Spinner },

    template: `
        <main>
            <h1>upcoming works</h1>

            <pre>{{ upcoming }}</pre>
        </main>
    `,

    data: () => ({
        upcoming: []
    }),

    async mounted() {
        try {
            this.upcoming = await fetchUpcoming();
        } catch (e) {
            console.error(e);
            this.upcoming = [];
        }
    }
};
