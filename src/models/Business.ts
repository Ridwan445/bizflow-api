import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database";

class Business extends Model {
    public id!: number;
    public businessName!: string;
    public address!: string;
    public phone!: string;
    public businessEmail!: string;
    public description!: string;
}

Business.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        businessName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        businessEmail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'Business',
        timestamps: true,
        tableName: 'businesses'
    }
);
 export default Business;