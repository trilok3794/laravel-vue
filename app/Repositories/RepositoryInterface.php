<?php namespace App\Repositories;

interface RepositoryInterface
{
    public function find($id);

    public function where(array $data);

    public function all();

    public function create(array $data);

    public function update(array $data, $id);

    public function delete($id);

    public function show($id);
}
