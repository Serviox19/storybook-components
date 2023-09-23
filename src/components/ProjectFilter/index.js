import React from 'react';
import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import './project-filter.scss';

export const ProjectFilter = ({ content, ...props }) => {
  const [activeFilters, setActiveFilter] = useState([]);

  const handleFilterToggle = (filter) => {
    if (activeFilters.includes(filter)) {
      // remove filter
      setActiveFilter(activeFilters.filter(item => item !== filter));
    } else {
      // add filter
      setActiveFilter(oldArray => [...oldArray, filter])
    }
  }

  const removeAllFilters = () => {
    setActiveFilter([]);
  }

  const matchingProjects = useMemo(() => {
    if (!activeFilters.length) {
      return content;
    } else {
      return content.filter((project) => {
        return project.tags.some(i => activeFilters.includes(i));
      })
    }
  }, [activeFilters])

  const renderFilters = () => {
    return props.filters.map((filter) => {
      return (
        <button className={`filter ${activeFilters.length && activeFilters.includes(filter) ? 'active' : ''}`} onClick={() => handleFilterToggle(filter)}>
          { filter }
        </button>
      );
    })
  }

  const renderProjects = () => {
    return matchingProjects.map((project) => {
      return (
        <div className="project-filter__item">
          <div className="media">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
          <div className="item-content">
            <p>{project.title}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div style={{ margin: '3rem', maxWidth: '46.25rem', paddingTop: '2rem' }}>
      <div className="project-filter">
        <div className="filters">
          {renderFilters()}
          {activeFilters.length && activeFilters.length > 1 ?
            <div className="clear-all" onClick={() => removeAllFilters()}>Clear All</div>
          : null}
        </div>
        <div className="project-filter__grid">
          {renderProjects()}
        </div>
      </div>
    </div>
  );
};

ProjectFilter.protoTypes = {
  title: PropTypes.string,
  content: PropTypes.array
};