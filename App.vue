<!-- <template>
  <div>
    <h1>Lesson List</h1>
    <table>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Location</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lesson in lessons" :key="lesson.location">
          <td>{{ lesson.topic }}</td>
          <td>{{ lesson.location }}</td>
          <td>{{ lesson.price }}</td>
        </tr>
      </tbody>
    </table>
    <h1>User Information</h1>
    <p>Email: {{ user.Email }}</p>
    <p>Password: {{ user.Password }}</p>
  </div>
</template>

<script>
import fetch from 'cross-fetch';
import Vue from 'vue';

export default  {
  name: 'App',
  data() {
    return {
      lessons: [],
      user: {},
    };
  },
  mounted() {
    fetch('/lessons')
      .then((response) => response.json())
      .then((data) => (this.lessons = data));
    fetch('/user')
      .then((response) => response.json())
      .then((data) => (this.user = data[0]));
  },
};
</script> -->