import { createServer } from "miragejs"
createServer({
    routes() {
      this.namespace = "api"
      this.logging = false
      this.get("/projects", () => {
        return {
          projects: [
            { id: "0",name: "Apartment listing", link:"https://litvinovajann.com/SPA", description: "An apartment e-shop", imageUrl: "https://litvinovajann.com/img/projects/SPA.png", type: "simple" },
            { id: "1", name: "Calculator",link:"https://litvinovajann.com/calculator", description: "A calculator on Vanilla js", imageUrl: "https://litvinovajann.com/img/projects/calculator.png", type: "simple" },
            { id: "2", name: "Weather",link:"https://litvinovajann.com/weather-dev", description: "Pagination of API data on React", imageUrl: "https://litvinovajann.com/img/projects/weather-dev.png", type: "simple" },
            { id: "3",name: "Task editor", link:"https://litvinovajann.com/to-do-list",description: "Task manager on Vanilla js", imageUrl: "https://litvinovajann.com/img/projects/taskEditor.png", type: "simple" },
            { id: "4",name: "Landing page", link:"https://litvinovajann.com/mymoscow",description: "A landing page for a travel agency", imageUrl: "https://litvinovajann.com/img/projects/mymoscow.png", type: "simple" },
          ],
        }
      })
    },
  })