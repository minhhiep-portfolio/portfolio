import IntroducePage from "./../View/Introduce/IntroducePage";
import ProjectPage from "./../View/Project/ProjectPage";
// import ContactPage from "./../View/Contact/ContactPage";
import NotFoundPage from "./../View/NotFound/NotFoundPage";
import SkillPage from "../View/Skill/SkillPage";
import ProjectDetailPage from "./../View/Project/ProjectDetailPage";
const RouterConfig = [
    {
        path : "/",
        component : IntroducePage,
        exact : true
    },
    {
        path : "/project",
        component : ProjectPage,
        exact : false
    },
    // {
    //     path : "/contact",
    //     component : ContactPage,
    //     exact : false
    // },
    {
        path : "/skill",
        component : SkillPage,
        exact : false
    },
     {
        path : "/ten-project=:TenSlug&id=:id",
        component : ProjectDetailPage,
        exact : false
    },
    {
        path : "",
        component : NotFoundPage,
        exact : false
    }
]

export default RouterConfig;


