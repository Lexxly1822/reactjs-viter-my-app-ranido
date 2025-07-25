<?php
class Header
{
    //COLOUM
    public $header_aid; //coloum
    public $header_is_active;
    public $header_name;
    public $header_link;
    public $header_created;
    public $header_updated;

    public $connection; // variable for connection to database
    public $lastInsertedId; //when created is used store last inserted

    public $tblHeader; //table

    //when this file is used run this function
    public function __construct($db)
    {
        $this->connection = $db; // connection of database
        $this->tblHeader = 'my_app_header'; //table

    }
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblHeader} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    //creating data using this function
    public function create()
    {
        try {
            $sql = "insert into {$this->tblHeader} ( ";
            $sql .= "header_is_active, "; //kung anong value i-insert
            $sql .= "header_name, ";
            $sql .= "header_link, ";
            $sql .= "header_created, ";
            $sql .= "header_updated ) values ( ";
            $sql .= ":header_is_active, ";
            $sql .= ":header_name, ";
            $sql .= ":header_link, ";
            $sql .= ":header_created, ";
            $sql .= ":header_updated ) ";
            $query = $this->connection->prepare($sql); //to ready your query
            $query->execute([
                "header_is_active" => $this->header_is_active, //kung anong meron sa try meron din dito
                "header_name" => $this->header_name,
                "header_link" => $this->header_link,
                "header_created" => $this->header_created,
                "header_updated" => $this->header_updated,
            ]); //to run this sql
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            returnError($ex);
            $query = false;
        }

        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_name = :header_name, ";
            $sql .= "header_link = :header_link, ";
            $sql .= "header_updated = :header_updated ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_name" => $this->header_name,
                "header_link" => $this->header_link,
                "header_updated" => $this->header_updated,
                "header_aid" => $this->header_aid,

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
