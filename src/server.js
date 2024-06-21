import { createServer } from "miragejs"
createServer({
    routes() {
      this.namespace = "api"
      this.logging = false
      this.get("/projects", () => {
        return {
          projects: [
            { id: "7", name: "Capytasks",link:"https://capytasks.org", description: "Frontend: React Task Manager", imageUrl: "#", type: "simple" },
            { id: "6", name: "Dashboard",link:"https://litvinovajann.com/dashboard", description: "Responsive dashboard on Vanilla JS", imageUrl: "#", type: "simple" },
            { id: "0", name: "Vans",link:"https://litvinovajann.com/vans", description: "Van catalog on React.js", imageUrl: "https://litvinovajann.com/img/projects/vans.png", type: "simple" },
            { id: "1", name: "Travel responsive design site",link:"https://litvinovajann.com/travel", description: "React-built SASS responsive langing page", imageUrl: "https://litvinovajann.com/img/projects/travel.png", type: "simple" },
            { id: "2", name: "Calculator",link:"https://litvinovajann.com/calculator", description: "A calculator on Vanilla js", imageUrl: "https://litvinovajann.com/img/projects/calculator.png", type: "simple" },
            { id: "3", name: "Weather",link:"https://litvinovajann.com/weather-dev", description: "Pagination of API data on React", imageUrl: "https://litvinovajann.com/img/projects/weather-dev.png", type: "simple" },
            { id: "4",name: "Task editor", link:"https://litvinovajann.com/to-do-list",description: "Task manager on Vanilla js", imageUrl: "https://litvinovajann.com/img/projects/taskEditor.png", type: "simple" },
            { id: "5",name: "Landing page", link:"https://litvinovajann.com/mymoscow",description: "A landing page for a travel agency", imageUrl: "https://litvinovajann.com/img/projects/mymoscow.png", type: "simple" },
          ],
        }
      })
    },
  })