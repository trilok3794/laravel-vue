<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Repository;
use App\Post;

class PostController extends Controller
{
    /**
     * @var Repository
     */
    protected $post;

    /**
     * PostController constructor.
     */
    public function __construct(Post $post)
    {
        $this->post = new Repository($post);
    }

    public function index()
    {
        $posts = $this->post->getModel()->orderBy('id', 'desc')->get();

        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $request->validate([
          'title' => 'required',
          'description' => 'required',
        ]);

        $this->post->updateOrCreate(['id' => $request->id], [
            'title' => $request->title,
            'description' => $request->description
        ]);

        return response()->json('success');
    }

    public function edit($id)
    {
        $post = $this->post->find($id);

        return response()->json($post);
    }

    public function destroy($id)
    {
        $this->post->find($id)->delete();

        return response()->json('success');
    }
}
