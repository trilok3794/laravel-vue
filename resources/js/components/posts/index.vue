<template>
  <div>
    <h1>Posts</h1>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <router-link :to="{ name: 'PostCreate' }" class="btn btn-primary pull-right">Create Post</router-link>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-hover">
              <thead>
              <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Action</th>
              </tr>
              </thead>
              <tbody>
                  <tr v-for="post of posts" :key="post.id">
                      <td v-text="post.title"></td>
                      <td v-text="post.description"></td>
                      <td>
                        <router-link :to="{ name: 'PostEdit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger" @click="remove(post.id)">Delete</button>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: mapState({
    posts: state => state.postModule.posts,
  }),
  mounted () {
    this.getPosts();
  },
  methods: {
    ...mapActions([
        'getPosts',
        'deletePost',
    ]),
    remove(id) {
      this.$swal({
          title: "Delete this post?",
          text: "Are you sure? You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes"
      }).then((result) => {
          if (result.value) {
            this.deletePost(id);
          }
      });
    }
  }
}
</script>
