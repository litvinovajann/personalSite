import { createServer } from "miragejs"
createServer({
    routes() {
      this.namespace = "api"
      this.logging = false
      this.get("/projects", () => {
        return {
          projects: [
            { id: "0",name: "Apartment listing", link:"http://24.199.117.157/SPA", description: "An apartment e-shop", imageUrl: "http://24.199.117.157/img/projects/SPA.png", type: "simple" },
            { id: "1", name: "Calculator",link:"http://24.199.117.157/calculator", description: "A calculator on Vanilla js", imageUrl: "http://24.199.117.157/img/projects/calculator.png", type: "simple" },
            { id: "2", name: "Weather",link:"http://24.199.117.157/weather-dev", description: "Pagination of API data on React", imageUrl: "http://24.199.117.157/img/projects/weather-dev.png", type: "simple" },
            { id: "3",name: "Task editor", link:"http://24.199.117.157/to-do-list",description: "Task manager on Vanilla js", imageUrl: "http://24.199.117.157/img/projects/taskEditor.png", type: "simple" },
            { id: "4",name: "Landing page", link:"http://24.199.117.157/mymoscow",description: "A landing page for a travel agency", imageUrl: "http://24.199.117.157/img/projects/mymoscow.png", type: "simple" },
          ],
        }
      })
    },
  })