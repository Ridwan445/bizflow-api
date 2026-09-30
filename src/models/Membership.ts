import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database";

class Membership extends Model {
    public id!: number;
    public userId!: number;
    public businessId!: number;
    public role!: "OWNER" | "ADMIN" | "ACCOUNTANT" | "STAFF";
    public status!: "ACTIVE" | "PENDING" | "SUSPENDED";
}

Membership.init(
{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        required: true  
    },
    businessId: {
        type: DataTypes.INTEGER,
        required: true
    },
    role: {
        type: DataTypes.ENUM(
            'ADMIN', 
            'ACCOUNTANT',
            'OWNER',
            'STAFF',
        ),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM(
            'ACTIVE', 
            'PENDING',
            'SUSPENDED',
        ),
    },
        sequelize,
        tableName: "users",
        timestamps: true,

})

export default Membership;