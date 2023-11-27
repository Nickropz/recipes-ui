<template>
    <v-row class="ma-1">
        <v-col>
            <v-card height="calc(100vh - 90px)">
                <v-card-title>Search for Recipes</v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="name"
                        label="Recipe Name (optional)"
                    />

                    <v-autocomplete
                        v-model="country"
                        label="Country"
                        :items="countries"
                        :rules="rules"
                    />

                    <v-text-field
                        v-model="maxResults"
                        label="Max Results"
                        type="number"
                    />

                    Categories:
                    <v-row class="d-flex">

                        <v-col>
                            <v-switch
                                label="Vegan"
                                @change="updateCategory($event, 'vegan')"
                            />
                        </v-col>
                        <v-col>
                            <v-switch
                                label="Vegetarian"
                                @change="updateCategory($event, 'vegetarian')"
                            />
                        </v-col>
                        <v-col>
                            <v-switch
                                label="Beef"
                                @change="updateCategory($event, 'beef')"
                            />
                        </v-col>
                        <v-col>
                            <v-switch
                                label="Chicken"
                                @change="updateCategory($event, 'chicken')"
                            />
                        </v-col>
                        <v-col>
                            <v-switch
                                label="Seafood"
                                @change="updateCategory($event, 'seafood')"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-spacer />
                    <v-btn 
                        :disabled="!countrySelected"
                        color="primary darken-1" 
                        class="mr-3" 
                        @click="submit"
                    >
                            Submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>

        <v-col>
            <v-card height="calc(100vh - 90px)">
                <v-card-title>Results</v-card-title>
                <v-data-table
                    v-if="results"
                    :headers="headers"
                    :items="results"
                />
                <div v-else class="ml-6">After you search for a recipe, results will be displayed here.</div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import axios from 'axios'

    export default {
        data () {
            return {
                name: null,
                country: null,
                categories: [],
                maxResults: null,
                countries: [],
                rules: [v => !!v?.length || 'Country selection is required.'],
                results: null,
                headers: [
                    { text: 'Recipe Name', value: 'strMeal' },
                    { text: 'Food Type', value: 'strArea' },
                    { text: 'Category', value: 'strCategory' },
                    { text: 'Tags', value: 'strTags' }
                ]
            }
        },

        async created () {
            const response = await axios.get('http://localhost:3000/api/recipe_types')
            this.countries = response.data.meals.map(m => m.strArea)
        },

        computed: {
            countrySelected () {
                return !!this.country?.length
            }
        },

        methods: {
            updateCategory (value, category) {
                if (value) {
                    this.categories.push(category)
                } else {
                    this.categories.splice(this.categories.indexOf(category), 1)
                }
            },
            async submit () {
                // STEP 1: get all data by user-entered country
                let response = await axios.get('http://localhost:3000/api/recipes', { params: { a: this.country } })
                const countryMatches = response.data.meals
                console.log(countryMatches)
                console.log('da fuq')

                // STEP 2: Take the id of each result and run separate query to get enriched data
                const promises = countryMatches?.map(match =>
                    axios.get('http://localhost:3000/api/recipe', { params: { i: match.idMeal }})
                )
                response = await Promise.all(promises)
                this.results = response.map(r => r.data.meals[0])
                if (this.name) {
                    this.results = this.results.filter(r => r.strMeal.toLowerCase().includes(this.name.toLowerCase()))
                }
                if (this.categories.length) {
                    this.results = this.results.filter(r => this.categories.includes(r.strCategory.toLowerCase()))
                }
                
                console.log(this.results)
            }
        }
    }
</script>
