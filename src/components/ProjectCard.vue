<template>
  <div class="project-card" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <div class="image-container" :class="{ 'hovered': isHovered }">
      <img :src="src" :alt="name" class="project-image" />
      <div class="overlay" :class="{ 'visible': isHovered }">
        <h3 class="project-name">{{ name }}</h3>
        <div class="content-row">
          <div class="badges-container">
            <slot name="badges"></slot>
          </div>
          <div class="action-icons">
            <a :href="repository" target="_blank" class="icon-link" v-if="href">
              <img src="/github.svg" alt="Icon 1" class="action-icon" />
            </a>
            <a :href="href" target="_blank" class="icon-link" v-if="repository">
              <img src="/web.svg" alt="Icon 2" class="action-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    name: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    repository: {
      type: String,
    },
    href: {
      type: String,
    }
  },
  data() {
    return {
      isHovered: false
    }
  }
}
</script>

<style scoped>
.project-card {
  width: 100%;
  max-width: 414px;
  aspect-ratio: 1/1;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.4s ease;
}

.image-container.hovered {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-container.hovered .project-image {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
}

.overlay.visible {
  opacity: 1;
}

.project-name {
  color: white;
  font-size: 2.2em;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
}

.content-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.badges-container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  max-width: 100%;
}

.action-icons {
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.icon-link {
  display: block;
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease;
}

.icon-link:hover {
  transform: scale(1.1);
}

.action-icon {
  width: 24px;
  height: 24px;
}

/* Responsive Breakpoints */
@media screen and (max-width: 768px) {
  .project-card {
    max-width: 100%;
    margin-bottom: 15px;
  }

  .project-name {
    font-size: 1.8em;
  }

  .action-icons {
    bottom: 15px;
    right: 15px;
  }

  .icon-link,
  .action-icon {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: 480px) {
  .project-card {
    margin-bottom: 10px;
  }

  .project-name {
    font-size: 1.5em;
  }

  .content-row {
    gap: 8px;
  }

  .badges-container {
    gap: 6px;
  }

  .action-icons {
    bottom: 10px;
    right: 10px;
  }

  .icon-link,
  .action-icon {
    width: 18px;
    height: 18px;
  }
}

@media screen and (max-width: 320px) {
  .project-name {
    font-size: 1.3em;
  }

  .badges-container {
    gap: 4px;
  }

  .action-icons {
    bottom: 8px;
    right: 8px;
  }
}
</style>