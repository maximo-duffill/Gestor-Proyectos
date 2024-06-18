<template>
  <div class="home">
    <h1>Welcome to the newest project organizer!</h1>

    <div class="world-globe"></div>

    

    <div class="content">
      <section class="project-features">
        <h2>About the Project Management Application</h2>
        <div class="features">
          <div class="feature">
            <img src="@/assets/Pictures/Member.jpg" alt="Feature 1">
            <p>Organize your tasks with ease and efficiency.</p>
          </div>
          <div class="feature">
            <img src="@/assets/Pictures/Member.jpg" alt="Feature 2">
            <p>Collaborate with your team in real-time.</p>
          </div>
          <div class="feature">
            <img src="@/assets/Pictures/Member.jpg" alt="Feature 3">
            <p>Track project progress and deadlines.</p>
          </div>
        </div>
      </section>
    </div>

    <div class="team-section">
      <section class="team">
        <h2>Meet Our Team</h2>
        <div class="team-members">
          <div class="team-member">
            <img src="@/assets/Pictures/Member.jpg" alt="Team Member 1">
            <p>John Doe - Project Manager</p>
          </div>
          <div class="team-member">
            <img src="@/assets/Pictures/Member.jpg" alt="Team Member 2">
            <p>Jane Smith - Lead Developer</p>
          </div>
          <div class="team-member">
            <img src="@/assets/Pictures/Member.jpg" alt="Team Member 3">
            <p>Mike Johnson - UX/UI Designer</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  background-color: #f0f0f0; /* Fallback background color */
  background-image: url('@/assets/Pictures/WorldGlobe.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
}

h1 {
  z-index: 1;
  color: #020202;
  text-align: center;
  margin-bottom: 2rem;
}

.world-globe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  background: linear-gradient(to right, rgba(0, 170, 255, 0), rgba(0, 170, 255, 0.8), rgba(0, 170, 255, 1), rgba(0, 170, 255, 0.8), rgba(0, 170, 255, 0));
  pointer-events: none;
}

.team-section {
  width: 100%;
  max-width: 1000px; /* Adjust max-width as needed */
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  z-index: 2;
}

.team h2 {
  text-align: center;
}

.team-members {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.team-member {
  text-align: center;
  margin: 1rem;
}

.team-member img {
  width: 150px; /* Adjust image size */
  height: 150px; /* Adjust image size */
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
}

.content {
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-bottom: 2rem;
  max-width: 800px; /* Adjust max-width as needed */
}

h2 {
  margin-bottom: 1rem;
  color: #333;
}

.project-features {
  margin-bottom: 2rem;
}

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature {
  text-align: center;
  margin: 1rem 0;
}

.feature img {
  width: 150px; /* Adjust image size */
  height: 150px; /* Adjust image size */
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
}

p {
  margin: 0;
}
</style>
