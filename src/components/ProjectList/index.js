import React, { useState, useEffect, Fragment } from "react";
// import _ from "lodash";
import { cloneDeep } from "lodash";
import { ProjectData } from "./projectData";
import HeaderTags from "../TagList/index";
import Modal from "../Modal/index";
import * as S from "./styled";

export default () => {
  const [projects, setProjects] = useState(ProjectData);
  console.log("Projects state: ", projects);
  const [projectsClone, setProjectsClone] = useState([]);
  const [modalsClone, setModalsClone] = useState([]);
  console.log("modals clone state: ", modalsClone);
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState({});

  const loadAllProjects = () => {
    console.log("All projects");
    const copyProjects = cloneDeep(projects);
    console.log("LoadAll Copy Projects: ", copyProjects);
    copyProjects.forEach((item) => {
      //Set all to true
      item.show = true;
      return item;
    });
    setProjectsClone([...copyProjects]);
  };

  useEffect(() => {
    loadAllProjects();
  }, []);

  const loadProjectByTag = (tag) => {
    console.log("Load by Tag - projects Original: ", projects);
    // const copyProjects = [...projects];
    // const copyProjects = projects.map((item) => item);
    const copyProjects = JSON.parse(JSON.stringify(projects)); //clonar state projects using Deep copy
    console.log("Load by Tag - copyProjects2: ", copyProjects);

    const newProjects = copyProjects.map((project) => {
      // set show to false in all projects
      // project.show = false;
      if (project.tag == tag) {
        project.show = true;
        console.log("project by tag - project: ", project);
      }
      return project;
    });

    console.log("New Projects: ", newProjects);
    setProjectsClone([...newProjects]);
  };

  //Modals

  const openModal = (id) => {
    //Show modal container
    setShowModal(true);

    // const copyModals = _.cloneDeep(modals);
    // const copyModals = cloneDeep(projects);

    const copyModals = JSON.parse(JSON.stringify(projects));
    console.log("openmodal copyModals: ", copyModals);

    let selectedModal = copyModals.find((item) => item.id == id);
    console.log("selectedModal: ", selectedModal);
    selectedModal.show = true;

    //Active Modal
    setActiveModal(selectedModal);

    // Remover modal antigo
    const filteredModals = copyModals.filter((item) => item.id != id);
    console.log("open filteredModals: ", filteredModals);

    // setProjectsClone([...filteredModals, selectedModal]);
    setModalsClone([...filteredModals, selectedModal]);
  };

  const closeModal = (id) => {
    //Close modal container
    setShowModal(false);

    // const copyModals = _.cloneDeep(modals);
    // const copyModals = cloneDeep(projects);
    const copyModals = JSON.parse(JSON.stringify(projects));
    // const copyModals = JSON.parse(JSON.stringify(modals));
    const newModals = copyModals.map((item) => {
      if (item.id == id) {
        item.show = false;
      }
      return item;
    });

    console.log("CloseModals - newModals: ", newModals);
    // setProjectsClone([...newModals]);
    setModalsClone([...newModals]);
  };

  const next = (id) => {
    console.log("next - id: ", id);
    const copyModals = JSON.parse(JSON.stringify(projects));
    let selectedItem = copyModals.find((item) => item.id == id);
    console.log("Next selectedItem: ", selectedItem);
    let actualPositon = selectedItem.position;
    const nextPosition = ++actualPositon;
    console.log("nextPosition: ", nextPosition);
    // FilteredItems

    if (nextPosition <= copyModals.length) {
      let selectedItemNext = copyModals.find(
        (item) => item.position == nextPosition
      );
      selectedItemNext.show = true;
      console.log("selectedItemNext: ", selectedItemNext);
      const filteredItems = copyModals.filter(
        (item) => item.id != selectedItemNext.id
      );
      console.log("Next filteredItems: ", filteredItems);

      // actualize next item
      setModalsClone([...filteredItems, selectedItemNext]);

      // Change active modal
      setActiveModal(selectedItemNext);
    } else {
      let selectedItemInit = copyModals.find((item) => item.position == 1);
      selectedItemInit.show = true;
      console.log("selectedItemInit: ", selectedItemInit);
      const filteredItems = copyModals.filter(
        (item) => item.id != selectedItemInit.id
      );
      console.log("Next Init filteredItems: ", filteredItems);

      // actualize next item
      setModalsClone([...filteredItems, selectedItemInit]);

      // Change active modal
      setActiveModal(selectedItemInit);
    }
  };

  const prev = (id) => {
    const copyModals = JSON.parse(JSON.stringify(projects));
    let selectedItem = copyModals.find((item) => item.id == id);
    console.log("Prev selectedItem: ", selectedItem);
    let actualPositon = selectedItem.position;
    const prevPosition = --actualPositon;
    console.log("prevPosition: ", prevPosition);

    if (prevPosition >= 1) {
      let selectedItemPrev = copyModals.find(
        (item) => item.position == prevPosition
      );
      console.log("selectedItemPrev: ", selectedItemPrev);
      selectedItemPrev.show = true;
      const filteredItems = copyModals.filter(
        (item) => item.id != selectedItemPrev.id
      );
      console.log("Prev filteredItems: ", filteredItems);

      // actualize next item
      setModalsClone([...filteredItems, selectedItemPrev]);

      // Change active modal
      setActiveModal(selectedItemPrev);
    } else {
      let selectedItemFinal = copyModals.find(
        (item) => item.position == copyModals.length
      );
      selectedItemFinal.show = true;
      console.log("selectedItemFinal: ", selectedItemFinal);
      const filteredItems = copyModals.filter(
        (item) => item.id != selectedItemFinal.id
      );
      console.log("Prev Final filteredItems: ", filteredItems);

      // actualize next item
      setModalsClone([...filteredItems, selectedItemFinal]);

      // Change active modal
      setActiveModal(selectedItemFinal);
    }
  };

  return (
    <Fragment>
      <S.WrapperPortfolio>
        <HeaderTags
          loadAllProjects={loadAllProjects}
          loadProjectByTag={loadProjectByTag}
        />
        <h3 className="title">our works which makes you just wow</h3>
        <S.WrapperProjects>
          {projectsClone.map((item) => {
            return (
              <>
                {item.show && (
                  <S.ProjectItem key={item.id}>
                    <figure onClick={() => openModal(item.id)}>
                      <img src={item.image} alt="teste" />
                    </figure>
                    <h3> {item.name} </h3>
                    <p> {item.tag} </p>
                  </S.ProjectItem>
                )}
              </>
            );
          })}
        </S.WrapperProjects>
      </S.WrapperPortfolio>
      <Fragment>
        {showModal && (
          <>
            <Modal modalsClone={modalsClone} closeModal={closeModal} />
          </>
        )}
      </Fragment>
    </Fragment>
  );
};
