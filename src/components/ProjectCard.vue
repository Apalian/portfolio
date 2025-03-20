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
            <a :href="repository" target="_blank" class="icon-link">
              <img src="/github.svg" alt="Icon 1" class="action-icon" />
            </a>
            <a :href="href" target="_blank" class="icon-link">
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
    reporsitory: {
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
  width: 414px;
  aspect-ratio: 1/1;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 20px;
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
  justify-content: flex-start;
  align-items: flex-start;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px;
  box-sizing: border-box;
}

.overlay.visible {
  opacity: 1;
}

.project-name {
  color: white;
  font-size: 2.2em;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.badges-container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
  flex: 1;
}

.action-icons {
  display: flex;
  gap: 8px;
  margin-left: 12px;
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
</style>