<template>
  <div>
    <h1>Edit Post</h1>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <router-link :to="{ name: 'PostIndex' }" class="btn btn-primary pull-right">Back</router-link>
          </div>
        </div>
        <form method="post">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Title:</label>
                <input type="text" class="form-control" v-model="post.title">
                <span class="help-block">
                    <strong>{{ errors.mobile }}</strong>
                </span>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Description:</label>
                  <textarea class="form-control" v-model="post.description" rows="5"></textarea>
                </div>
              </div>
            </div><br />
            <div class="form-group">
              <button type="button" class="btn btn-primary" @click="save()">Save</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  computed: mapState({
    post: state => state.postModule.post,
    errors: state => state.postModule.errors,
  }),
  created() {
    const vm = this;
    vm.getPost(vm.$route.params.id);
  },
  methods: {
    ...mapActions([
        'savePost',
        'getPost',
    ]),
    save() {
      const vm = this;
      vm.savePost(vm.post);
    }
  }
}
</script>
