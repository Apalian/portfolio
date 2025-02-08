<template>
  <div class="workout-modal">
    <div class="modal-header">
      <h2>Activité Sportive - Musculation</h2>
      <button class="close-button" @click="$emit('close')">&times;</button>
    </div>

    <div class="modal-body">
      <div class="content-section">
        <h3>Description</h3>
        <p>La musculation fait partie intégrante de ma routine quotidienne. Je m'entraîne tôt le matin à 5h, quatre fois par semaine, du lundi au vendredi. Ces sessions matinales me permettent de commencer la journée avec énergie et détermination, tout en maintenant une discipline personnelle rigoureuse. C'est un moment privilégié où je peux me concentrer sur mes objectifs et me dépasser physiquement.</p>

        <div class="info-container">
          <div class="info-item">
            <h4>Horaire</h4>
            <p>5h du matin</p>
          </div>
          <div class="info-item">
            <h4>Fréquence</h4>
            <p>4x par semaine</p>
          </div>
        </div>

        <h3>Compétences Acquises</h3>
        <ul class="skills-list">
          <li>Discipline</li>
          <li>Constance</li>
          <li>Dépassement de soi</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close']);
</script>

<style scoped>
.workout-modal {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px 10px;
  color: #e0e0e0;
}

.modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.content-section {
  flex: 1;
}

.info-container {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 600px;
}

.info-item {
  text-align: center;
  padding: 15px;
  background-color: #2d2d2d;
  border-radius: 10px;
  min-width: 150px;
  border: 1px solid #3a3a3a;
}

.info-item h4 {
  color: #e0e0e0;
  margin-bottom: 5px;
}

.info-item p {
  color: #00b4d8;
}

.skills-list {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.skills-list li {
  background-color: #2d2d2d;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: #e0e0e0;
  border: 1px solid #3a3a3a;
  transition: all 0.3s ease;
}

.skills-list li:hover {
  background-color: #333333;
  transform: translateY(-2px);
}

h2 {
  color: #e0e0e0;
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
}

h3 {
  color: #00b4d8;
  margin: 20px 0 10px 0;
}

p {
  line-height: 1.6;
  color: #b0b0b0;
}
</style> 