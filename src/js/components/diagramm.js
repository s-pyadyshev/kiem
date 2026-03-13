export const diagramm = (() => {
  const init = () => {
    const diagramNode = document.querySelector("#diagramm");

    if (!diagramNode) {
      return;
    }

    const closeNode = diagramNode.querySelector(".diagram__close");
    const buttonNodes = diagramNode.querySelectorAll(".diagram__button");
    const infoNode = diagramNode.querySelector(".diagram__info");
    const circleNode = diagramNode.querySelector(".diagram__circle");

    buttonNodes.forEach((btn) => {
      btn.addEventListener("click", () => {
        const section = btn.dataset.section;
        const isActive = btn.classList.contains("diagram__button--active");

        buttonNodes.forEach((b) => b.classList.remove("diagram__button--active"));

        if (!isActive) {
          btn.classList.add("diagram__button--active");
          infoNode.classList.add("diagram__info--active");
          infoNode.dataset.activeSection = section;
          
          if (circleNode) {
            const sectionClasses = Array.from(circleNode.classList).filter(cls => 
              cls.startsWith('diagram__circle--section-')
            );
            sectionClasses.forEach(cls => circleNode.classList.remove(cls));
            
            circleNode.classList.add(`diagram__circle--section-${section}`);
          }
        } else {
          infoNode.classList.remove("diagram__info--active");
          delete infoNode.dataset.activeSection;
          
          if (circleNode) {
            const sectionClasses = Array.from(circleNode.classList).filter(cls => 
              cls.startsWith('diagram__circle--section-')
            );
            sectionClasses.forEach(cls => circleNode.classList.remove(cls));
          }
        }
      });
    });

    closeNode.addEventListener("click", () => {
      buttonNodes.forEach((btn) => btn.classList.remove("diagram__button--active"));
      infoNode.classList.remove("diagram__info--active");
      delete infoNode.dataset.activeSection;
      
      if (circleNode) {
        const sectionClasses = Array.from(circleNode.classList).filter(cls => 
          cls.startsWith('diagram__circle--section-')
        );
        sectionClasses.forEach(cls => circleNode.classList.remove(cls));
      }
    });
  };

  return {
    init,
  };
})();