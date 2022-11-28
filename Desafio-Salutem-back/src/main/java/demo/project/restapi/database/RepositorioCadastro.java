package demo.project.restapi.database;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.project.restapi.entidade.Cadastro;

public interface RepositorioCadastro extends JpaRepository<Cadastro, Long> {

}
