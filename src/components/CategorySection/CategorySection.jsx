import styles from "./CategorySection.module.css"
import CardVideo from "../CardVideo/CardVideo.jsx"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext.jsx"


const CategorySection = () => {
  
  const {categories, videos} = useContext(GlobalContext)
  
 

  return (
    <>
            {categories.map((cat) => {
        const filteredVideos = videos.filter(video => video.Categoria === cat.categoriaNombre);
        return (
          <section key={cat.id} className={styles.containerSection}>
            <h3 className={styles.TitleSection} style={{ backgroundColor: cat.categoriaColor }}>
              {cat.categoriaNombre}
            </h3>
            <div className={styles.containerVideo}>
              {filteredVideos.map(video => (
                <CardVideo 
                  key={video.id}
                  id={video.id}
                  categoriaColor={cat.categoriaColor}
                  linkVideo={video.linkVideo}
                  linkImagenVideo={video.linkImagenVideo}
                />
              ))}
            </div>
          </section>
        );
      })}

    </>
  )
}

export default CategorySection