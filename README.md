# n-react


# Parcel (internally using other packages)
- Dev Builds
- Local Server
- HMR = Hot Module Replacement
- File Watching algorith, - written in C++ 
- Caching - Faster Builds
- Image Optimization
- minification
- Bundling
- Compress
- Consistent Hashing
- Codesplitting
- Differential Bundling - support older browsers
- Diagnostic
- Beautiful Error Handling
- A way to Host on HTTPs
- Tree Shaking - remove unused code
- Different deve and prod bundles

# ChefConnect

/*
* Header
*  - Logo
*  - Nav Items
* Body
* - Search
* - ResturantContainer
*   - ResturantCards
*    - Img
*    - Name of Res, Star Rating, Cuisine, Deliverytime
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

# Types of Export/Import
- Default Export/Import
    export default Heading;
    import Heading from "path";

- Named Export/Import
    export const Heading(){...};
    import {Heading} from "path";

# Hooks
  (Normal JS utility function)
- useState()
- useEffect()

# Routing in Webapps
	Client Side Routing (Link component)
	Server Side Routing(anchor tag)


# React Life Cycle Methods
  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  render phase and commit phase
  react patches render phase and commit phase for optiomization as DOM updation is expensive

  -parent contructor
  -parent render
  (
    -1st child contructor
    -1st child render
    -2nd child contructor
    -2nd child render
  ) = render phase
  (
    -1st child componentDidMount
    -2st child componentDidMount
  ) = commit phse { DOM updation in single batch }
  -parent componentDidMount

# Chunking / Code Splitting / Dynamic Bundling / OnDemand Loading / Lazy Loading
 -logical separation of bundle (enough for a feature)

# Higher OrderComponents 
  takes a component as Input
  builds a component on top of it and resturns the newly built component




